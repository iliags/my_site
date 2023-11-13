use egui::Ui;

#[derive(Copy, Clone, PartialEq, Default)]
pub struct Showcase;

impl super::View for Showcase {
    fn ui(&mut self, ui: &mut Ui) {
        ui.heading("Stuff I've Worked On");

        ui.separator();
    }
}