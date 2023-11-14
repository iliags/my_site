#![warn(clippy::all, rust_2018_idioms)]

mod app;
pub mod pages;
pub mod widgets;

pub use app::TemplateApp;


pub trait View {
    fn ui(&mut self, ui: &mut egui::Ui);
}

pub trait StaticView {
    fn static_ui(&self, ui: &mut egui::Ui);
}