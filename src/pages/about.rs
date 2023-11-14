use egui::Ui;

#[derive(Copy, Clone, PartialEq, Default)]
pub struct About;

impl crate::View for About {
    fn ui(&mut self, ui: &mut Ui) {
        ui.heading("About Me");

        ui.separator();

        ui.label("I was born in Michigan but have settled (for now) in Arizona. I spent 9 years in the United States Marine Corps, where I was deployed to Okinawa, Afghanistan, and Kuwait.");
        ui.label("");

        ui.label("My preferred tech stack leans into the bleeding edge for non-game projects; Unreal Engine is a close second.");
        ui.label("");


    }
}