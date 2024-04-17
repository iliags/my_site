use crate::GameState;
use bevy::prelude::*;
use bevy_asset_loader::prelude::*;

pub struct LoadingPlugin;

/// This plugin loads all assets using [`AssetLoader`] from a third party bevy plugin
/// Alternatively you can write the logic to load assets yourself
/// If interested, take a look at <https://bevy-cheatbook.github.io/features/assets.html>
impl Plugin for LoadingPlugin {
    fn build(&self, app: &mut App) {
        app.add_loading_state(
            LoadingState::new(GameState::Loading)
                .continue_to_state(GameState::Menu)
                .load_collection::<TextureAssets>(),
        );
    }
}

// the following asset collections will be loaded during the State `GameState::Loading`
// when done loading, they will be inserted as resources (see <https://github.com/NiklasEi/bevy_asset_loader>)

#[derive(AssetCollection, Resource)]
pub struct TextureAssets {
    #[asset(path = "textures/bevy.png")]
    pub bevy: Handle<Image>,

    #[asset(path = "textures/github.png")]
    pub github: Handle<Image>,

    #[asset(path = "showcase/icon_bb.png")]
    pub burning_bridges: Handle<Image>,

    #[asset(path = "showcase/icon_cq.png")]
    pub chex_quest: Handle<Image>,

    #[asset(path = "showcase/icon_ib.png")]
    pub idle_breaker: Handle<Image>,

    #[asset(path = "showcase/icon_ink.png")]
    pub ink: Handle<Image>,

    #[asset(path = "showcase/icon_sp.png")]
    pub smelog: Handle<Image>,
}
