use crate::loading::{ShowcaseAssets, TextureAssets};
use crate::GameState;
use bevy::math::primitives::Direction3d;
use bevy::prelude::*;
use bevy::render::camera::ClearColorConfig;
use bevy_panorbit_camera::PanOrbitCamera;

pub struct MenuPlugin;

impl Plugin for MenuPlugin {
    fn build(&self, app: &mut App) {
        app.add_systems(OnEnter(GameState::Menu), setup_menu)
            .add_systems(Update, click_play_button.run_if(in_state(GameState::Menu)))
            .add_systems(Update, update_tiles.run_if(in_state(GameState::Menu)))
            .add_systems(Update, draw_debug_gizmo.run_if(in_state(GameState::Menu)))
            .add_systems(OnExit(GameState::Menu), cleanup_menu);
    }
}

#[derive(Component)]
struct ButtonColors {
    normal: Color,
    hovered: Color,
}

impl Default for ButtonColors {
    fn default() -> Self {
        ButtonColors {
            normal: Color::rgb(0.15, 0.15, 0.15),
            hovered: Color::rgb(0.25, 0.25, 0.25),
        }
    }
}

#[derive(Component)]
struct Tile;

fn update_tiles(
    mut tile_query: Query<&mut Transform, With<Tile>>,
    camera_query: Query<&Transform, (With<Camera>, Without<Tile>)>,
) {
    let camera_transform = camera_query.single();

    for mut transform in tile_query.iter_mut() {
        let new_rotation = Transform::from_translation(transform.translation)
            .looking_at(camera_transform.translation, Vec3::Y)
            .rotation;
        transform.rotation = new_rotation;
    }
}

fn draw_debug_gizmo(
    tile_query: Query<&GlobalTransform, With<Tile>>,
    camera_query: Query<(&Camera, &GlobalTransform), (With<Camera>, Without<Tile>)>,
    windows: Query<&Window>,
    mut gizmos: Gizmos,
) {
    let (camera, camera_transform) = camera_query.single();

    for tile_transform in tile_query.iter() {
        let Some(cursor_position) = windows.single().cursor_position() else {
            continue;
        };

        // Calculate a ray pointing from the camera into the world based on the cursor's position.
        let Some(ray) = camera.viewport_to_world(camera_transform, cursor_position) else {
            continue;
        };

        // Calculate if and where the ray is hitting the ground plane.
        let Some(distance) = ray.intersect_plane(
            tile_transform.translation(),
            Plane3d::new(tile_transform.up()),
        ) else {
            continue;
        };

        let point = ray.get_point(distance);

        // Draw a circle just above the ground plane at that position.
        gizmos.circle(
            point + tile_transform.up() * 0.01,
            Direction3d::new_unchecked(tile_transform.up()), // Up vector is already normalized.
            0.2,
            Color::WHITE,
        );
    }
}

#[derive(Component)]
struct Menu;

fn setup_menu(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
    textures: Res<TextureAssets>,
    showcase_assets: Res<ShowcaseAssets>,
) {
    info!("menu");

    let camera_transform = Transform::from_xyz(-15.5, 0.0, 15.0).looking_at(
        Vec3 {
            x: 0.0,
            y: 10.0,
            z: 0.0,
        },
        Vec3::Y,
    );

    // Camera
    commands.spawn((
        Camera3dBundle {
            camera: Camera {
                clear_color: ClearColorConfig::Custom(Color::rgb(0.1, 0.1, 0.1)),
                ..Default::default()
            },
            transform: camera_transform,
            ..default()
        },
        PanOrbitCamera::default(),
    ));

    // Project tiles
    let cube_scale = 1.5;
    let cube = meshes.add(Cuboid::new(1.5 * cube_scale, 1.0 * cube_scale, 0.1));

    let mut y_offset = 0.0;
    for asset in showcase_assets.all() {
        // Material
        let material_handle = materials.add(StandardMaterial {
            base_color_texture: Some(asset.clone()),
            alpha_mode: AlphaMode::Opaque,
            unlit: true,
            double_sided: true,
            ..default()
        });

        commands
            .spawn(PbrBundle {
                mesh: cube.clone(),
                material: material_handle, // Remove type annotation
                transform: Transform::from_xyz(0.0, y_offset, 0.0)
                    .looking_at(camera_transform.translation, Vec3::Y),
                ..default()
            })
            .insert(Tile);

        y_offset += 1.5;
    }

    // Light
    commands.spawn(PointLightBundle {
        point_light: PointLight {
            shadows_enabled: true,
            ..default()
        },
        transform: Transform::from_xyz(4.0, 8.0, 4.0),
        ..default()
    });

    // Buttons
    commands.spawn((
        NodeBundle {
            style: Style {
                width: Val::Percent(100.0),
                height: Val::Percent(100.0),
                flex_direction: FlexDirection::Column,
                align_items: AlignItems::Center,
                justify_content: JustifyContent::Center,
                ..default()
            },
            ..default()
        },
        Menu,
    ));
    commands
        .spawn((
            NodeBundle {
                style: Style {
                    flex_direction: FlexDirection::Row,
                    align_items: AlignItems::Center,
                    justify_content: JustifyContent::SpaceAround,
                    bottom: Val::Px(5.),
                    width: Val::Percent(100.),
                    position_type: PositionType::Absolute,
                    ..default()
                },
                ..default()
            },
            Menu,
        ))
        .with_children(|children| {
            children
                .spawn((
                    ButtonBundle {
                        style: Style {
                            width: Val::Px(170.0),
                            height: Val::Px(50.0),
                            justify_content: JustifyContent::SpaceAround,
                            align_items: AlignItems::Center,
                            padding: UiRect::all(Val::Px(5.)),
                            ..Default::default()
                        },
                        background_color: Color::NONE.into(),
                        ..Default::default()
                    },
                    ButtonColors {
                        normal: Color::NONE,
                        ..default()
                    },
                    OpenLink("https://bevyengine.org"),
                ))
                .with_children(|parent| {
                    parent.spawn(TextBundle::from_section(
                        "Made with Bevy",
                        TextStyle {
                            font_size: 15.0,
                            color: Color::rgb(0.9, 0.9, 0.9),
                            ..default()
                        },
                    ));
                    parent.spawn(ImageBundle {
                        image: textures.bevy.clone().into(),
                        style: Style {
                            width: Val::Px(32.),
                            ..default()
                        },
                        ..default()
                    });
                });
            children
                .spawn((
                    ButtonBundle {
                        style: Style {
                            width: Val::Px(170.0),
                            height: Val::Px(50.0),
                            justify_content: JustifyContent::SpaceAround,
                            align_items: AlignItems::Center,
                            padding: UiRect::all(Val::Px(5.)),
                            ..default()
                        },
                        background_color: Color::NONE.into(),
                        ..Default::default()
                    },
                    ButtonColors {
                        normal: Color::NONE,
                        hovered: Color::rgb(0.25, 0.25, 0.25),
                    },
                    OpenLink("https://github.com/iliags/my_site"),
                ))
                .with_children(|parent| {
                    parent.spawn(TextBundle::from_section(
                        "Source Code",
                        TextStyle {
                            font_size: 15.0,
                            color: Color::rgb(0.9, 0.9, 0.9),
                            ..default()
                        },
                    ));
                    parent.spawn(ImageBundle {
                        image: textures.github.clone().into(),
                        style: Style {
                            width: Val::Px(32.),
                            ..default()
                        },
                        ..default()
                    });
                });
        });
}

#[derive(Component)]
struct ChangeState(GameState);

#[derive(Component)]
struct OpenLink(&'static str);

fn click_play_button(
    mut next_state: ResMut<NextState<GameState>>,
    mut interaction_query: Query<
        (
            &Interaction,
            &mut BackgroundColor,
            &ButtonColors,
            Option<&ChangeState>,
            Option<&OpenLink>,
        ),
        (Changed<Interaction>, With<Button>),
    >,
) {
    for (interaction, mut color, button_colors, change_state, open_link) in &mut interaction_query {
        match *interaction {
            Interaction::Pressed => {
                if let Some(state) = change_state {
                    next_state.set(state.0.clone());
                } else if let Some(link) = open_link {
                    if let Err(error) = webbrowser::open(link.0) {
                        warn!("Failed to open link {error:?}");
                    }
                }
            }
            Interaction::Hovered => {
                *color = button_colors.hovered.into();
            }
            Interaction::None => {
                *color = button_colors.normal.into();
            }
        }
    }
}

fn cleanup_menu(mut commands: Commands, menu: Query<Entity, With<Menu>>) {
    for entity in menu.iter() {
        commands.entity(entity).despawn_recursive();
    }
}
