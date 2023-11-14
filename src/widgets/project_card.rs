
use egui::{ImageSource, Ui};
use crate::{StaticView};

#[derive(Clone)]
pub struct ProjectCard<'a> {
    pub project_name: &'static str,
    pub project_image: ImageSource<'a>,
    pub project_description: &'static str,
    pub project_tech: &'static str,
    pub project_work: &'static str,
    pub project_link: &'static str,
}

const SPACING: f32 = 20.0;

impl StaticView for ProjectCard<'_> {
    fn static_ui(&self, ui: &mut Ui) {
        egui::Frame::none()
            //.fill(egui::Color32::RED)
            .show(ui, |ui| {
                ui.heading(self.project_name);

                ui.add(
                    egui::Image::new(self.project_image.clone())
                        //.rounding(10.0)
                        //.max_size(egui::Vec2{
                        .fit_to_exact_size(egui::Vec2{
                            x: 128.0,
                            y: 128.0
                        })

                );

                ui.add_space(SPACING);

                ui.label("Description:");
                ui.label(self.project_description);

                ui.add_space(SPACING);

                ui.label("Tech Stack:");
                ui.label(self.project_tech);

                ui.add_space(SPACING);

                ui.label("What I did:");
                ui.label(self.project_work);

                ui.add_space(SPACING);

                ui.hyperlink_to("Store Page", self.project_link);

            });

    }
}