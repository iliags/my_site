use bevy::prelude::{ButtonInput, KeyCode, Res};

pub enum GameControl {
    ResetView,
}

impl GameControl {
    pub fn pressed(&self, keyboard_input: &Res<ButtonInput<KeyCode>>) -> bool {
        match self {
            GameControl::ResetView => keyboard_input.just_pressed(KeyCode::KeyR),
        }
    }
}
