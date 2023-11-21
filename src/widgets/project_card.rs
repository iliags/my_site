use crate::StaticView;
use egui::{FontId, ImageSource, RichText, Ui};

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
const FONT_SIZE: f32 = 14.0;

impl StaticView for ProjectCard<'_> {
    fn static_ui(&self, ui: &mut Ui) {
        egui::Frame::none().show(ui, |ui| {
            ui.add_space(SPACING / 2.0);
            ui.heading(self.project_name);
            ui.add(
                egui::Image::new(self.project_image.clone())
                    .fit_to_exact_size(egui::Vec2 { x: 128.0, y: 128.0 }),
            );

            ui.add_space(SPACING);

            ui.label(RichText::new("Description").font(FontId::proportional(FONT_SIZE)));
            ui.label(self.project_description);

            ui.add_space(SPACING);

            ui.label(RichText::new("Tech Stack").font(FontId::proportional(FONT_SIZE)));
            ui.label(self.project_tech);

            ui.add_space(SPACING);

            ui.label(RichText::new("What I Did").font(FontId::proportional(FONT_SIZE)));
            ui.label(self.project_work);

            ui.add_space(SPACING);

            ui.hyperlink_to("Store Page", self.project_link);

            ui.add_space(SPACING);
        });
    }
}
