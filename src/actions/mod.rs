use bevy::prelude::*;
use bevy_panorbit_camera::PanOrbitCamera;

use crate::actions::game_control::GameControl;
use crate::GameState;

mod game_control;

pub struct ActionsPlugin;

impl Plugin for ActionsPlugin {
    fn build(&self, app: &mut App) {
        app.init_resource::<Actions>().add_systems(
            Update,
            set_movement_actions.run_if(in_state(GameState::Menu)),
        );
    }
}

#[derive(Default, Resource)]
pub struct Actions {
    pub player_movement: Option<Vec2>,
}

pub fn set_movement_actions(
    mut _actions: ResMut<Actions>,
    keyboard_input: Res<ButtonInput<KeyCode>>,
    _touch_input: Res<Touches>,
    mut camera_query: Query<(&mut PanOrbitCamera, &mut Transform), With<Camera3d>>,
) {
    // TODO: Make a button input for resetting the camera view
    if GameControl::ResetView.pressed(&keyboard_input) {
        for (mut camera, mut transform) in camera_query.iter_mut() {
            camera.target_pitch = 0.0;
            camera.target_yaw = 0.0;
            camera.target_focus = Vec3::ZERO;
            camera.target_radius = 9.0;

            *transform = Transform::from_xyz(-2.5, 4.5, 9.0).looking_at(Vec3::ZERO, Vec3::Y);
        }
    }
}
