use egui::Ui;

#[derive(Copy, Clone, PartialEq, Default)]
pub struct About;

impl crate::View for About {
    fn ui(&mut self, ui: &mut Ui) {
        ui.heading("About Me");

        ui.separator();

        ui.vertical(|ui| {
            ui.label("I was born in Michigan but have settled (for now) in Arizona. I spent 9 years in the United States Marine Corps, where I was deployed to Okinawa, Afghanistan, and Kuwait.");
            ui.label("");

            ui.label("My introduction to web technology was in 2005 (anyone else remember applets?) which was...unpleasant. I'm really happy that Rust lets me do web things (like this site) without regular web development.");
            ui.label("");

            ui.label("I enjoy bleeding edge tech stacks, unorthodox software solutions, and Unreal Engine for game development.");
            ui.label("");

        });


    }
}