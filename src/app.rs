use crate::pages;
use crate::pages::{Page, View};


#[derive(PartialEq, Default)]
pub struct Pages {
    page_showcase: pages::showcase::Showcase,
    page_about: pages::about::About,
    open_page: Page,
}

#[derive(PartialEq, Default)]
pub struct TemplateApp {
    // Example stuff:
    page: Pages,
}

impl TemplateApp {
    /// Called once before the first frame.
    pub fn new(_cc: &eframe::CreationContext<'_>) -> Self {
        // Scale the UI up a little
        //cc.egui_ctx.set_pixels_per_point(1.4);
        Default::default()
    }
}

impl eframe::App for TemplateApp {

    /// Called each time the UI needs repainting, which may be many times per second.
    fn update(&mut self, ctx: &egui::Context, _frame: &mut eframe::Frame) {

        egui::TopBottomPanel::top("top_panel").show(ctx, |ui| {
            ui.horizontal(|ui| {
                ui.selectable_value(&mut self.page.open_page, Page::Showcase, "Showcase");
                ui.selectable_value(&mut self.page.open_page, Page::AboutMe, "About Me");
            });
        });


        egui::CentralPanel::default().show(ctx, |ui| {

            // Display selected page
            match self.page.open_page {
                Page::Showcase => {
                    self.page.page_showcase.ui(ui);
                }
                Page::AboutMe => {
                    self.page.page_about.ui(ui);
                }
            }

            // Info at the bottom of the page
            ui.with_layout(egui::Layout::bottom_up(egui::Align::LEFT), |ui| {
                powered_by_egui_and_eframe(ui);
                egui::warn_if_debug_build(ui);
            });
        });

    }
}

fn powered_by_egui_and_eframe(ui: &mut egui::Ui) {
    ui.horizontal(|ui| {
        ui.spacing_mut().item_spacing.x = 0.0;
        ui.label("Created with ");
        ui.hyperlink_to("egui", "https://github.com/emilk/egui");
        ui.label(" and ");
        ui.hyperlink_to(
            "eframe",
            "https://github.com/emilk/egui/tree/master/crates/eframe",
        );
        ui.label(", for funsies.");
    });
}
