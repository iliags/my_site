use egui::{Ui, RichText, FontId};

#[derive(Copy, Clone, PartialEq, Default)]
pub struct About;

const FONT_SIZE: f32 = 15.0;

impl crate::View for About {
    fn ui(&mut self, ui: &mut Ui) {
        egui::ScrollArea::vertical().show(ui, |ui| {
            ui.heading("About Me");

            ui.separator();

            ui.vertical(|ui| {
                ui.label("I was born in Michigan, but have settled (for now) in Arizona. I spent 9 years in the United States Marine Corps, where I was deployed to Okinawa, Afghanistan, and Kuwait.");
                ui.label("");

                ui.label("My introduction to web technology was in 2005 which was...unpleasant (anyone else remember java applets?). I'm really happy that Rust lets me do web things without regular web development.");
                ui.label("");

                ui.label("I enjoy bleeding edge tech stacks, unorthodox software solutions, and game development.");
                ui.label("");

            });

            ui.label("");

            ui.heading("Miscellaneous Experience");
            ui.separator();
            ui.vertical(|ui| {
                ui.label("In my free time, I experimented with a bunch of different tech stacks. It's not at a professional level but it definitely helped with other development areas");
                ui.label("");

                ui.label(RichText::new("Homebrew").font(FontId::proportional(FONT_SIZE)));
                ui.label("I have written a few hobby apps for the 3DS using tools from DevkitPro, and got a \"Hello World\" program running on the emulators for GameBoy Advance, Sega Dreamcast, and PSP. I did experiment with the PSVita SDK from Sony, but the console was at the end of its life at that point. While in highschool, I made a few games for the TI-84 which are hosted at TICalc.org. Z80 assembly isn't that bad in retrospect, it was definitely difficult for my teen brain to comprehend at the time though.");
                ui.label("");
                ui.hyperlink_to("TICalc.org profile.", "https://ticalc.org/cgi-bin/acct-view.cgi?userid=69337");
                

                
                
            });
        });
    }
}
