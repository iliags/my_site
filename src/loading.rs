use crate::GameState;
use bevy::prelude::*;
use bevy_asset_loader::prelude::*;

pub struct LoadingPlugin;

impl Plugin for LoadingPlugin {
    fn build(&self, app: &mut App) {
        app.add_loading_state(
            LoadingState::new(GameState::Loading)
                .continue_to_state(GameState::Menu)
                .load_collection::<TextureAssets>()
                .load_collection::<ShowcaseAssets>(),
        );
    }
}

#[derive(AssetCollection, Resource)]
pub struct TextureAssets {
    #[asset(path = "textures/bevy.png")]
    pub bevy: Handle<Image>,

    #[asset(path = "textures/github.png")]
    pub github: Handle<Image>,
}

#[derive(AssetCollection, Resource)]
pub struct ShowcaseAssets {
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

pub struct ShowcaseAssetsIter {
    index: usize,
    assets: Vec<Handle<Image>>,
}

impl ShowcaseAssets {
    pub fn all(&self) -> impl Iterator<Item = &Handle<Image>> {
        let assets = &[
            &self.idle_breaker,
            &self.burning_bridges,
            &self.chex_quest,
            &self.ink,
            &self.smelog,
        ];
        assets.iter().cloned().collect::<Vec<_>>().into_iter()
    }
}

impl IntoIterator for ShowcaseAssets {
    type Item = Handle<Image>;
    type IntoIter = ShowcaseAssetsIter;

    fn into_iter(self) -> Self::IntoIter {
        ShowcaseAssetsIter {
            index: 0,
            assets: vec![
                self.burning_bridges,
                self.chex_quest,
                self.idle_breaker,
                self.ink,
                self.smelog,
            ],
        }
    }
}

impl Iterator for ShowcaseAssetsIter {
    type Item = Handle<Image>;

    fn next(&mut self) -> Option<Self::Item> {
        let result = self.assets.get(self.index).cloned();
        self.index += 1;
        result
    }
}
