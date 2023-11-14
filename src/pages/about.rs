use egui::Ui;

#[derive(Copy, Clone, PartialEq, Default)]
pub struct About;

impl crate::View for About {
    fn ui(&mut self, ui: &mut Ui) {
        ui.heading("About Me");

        ui.separator();
    }
}