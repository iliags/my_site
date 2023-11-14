use egui::Ui;

#[derive(Copy, Clone, PartialEq, Default)]
pub struct Showcase;

impl crate::View for Showcase {
    fn ui(&mut self, ui: &mut Ui) {
        ui.heading("Stuff I've Worked On");

        ui.separator();


        egui::Grid::new("some_unique_id").show(ui, |ui| {
            ui.label("First row, first column");
            ui.label("First row, second column");
            ui.end_row();

            ui.label("Second row, first column");
            ui.label("Second row, second column");
            ui.label("Second row, third column");
            ui.end_row();

            ui.horizontal(|ui| { ui.label("Same"); ui.label("cell"); });
            ui.label("Third row, second column");
            ui.end_row();
        });
    }
}