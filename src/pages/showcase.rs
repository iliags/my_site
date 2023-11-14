use egui::{Ui};
use crate::StaticView;
use crate::widgets::project_card::{ProjectCard};


#[derive(Copy, Clone, PartialEq, Default)]
pub struct Showcase;

const PROJECTS: [ProjectCard<'_>; 4] = [
    ProjectCard {
        project_name: "Burning Bridges VR",
        project_image: egui::include_image!("../data/icon_bb.png"),
        project_description: "VR platformer",
        project_tech: "Unreal Engine",
        project_work: "Implemented the game mechanics, VR player character, and level logic.",
        project_link: "https://store.steampowered.com/app/818430/BurningBridges_VR/",
    },
    ProjectCard {
        project_name: "INK",
        project_image: egui::include_image!("../data/icon_ink.jpg"),
        project_description: "VR Parkour",
        project_tech: "Unreal Engine",
        project_work: "I created everything except for 3D models and level asset placement",
        project_link: "https://store.steampowered.com/app/1156950/INK/",
    },
    ProjectCard {
        project_name: "Smelogs Playground",
        project_image: egui::include_image!("../data/icon_sp.jpg"),
        project_description: "An RTS with a focus on upgrading units to unlock capabilities",
        project_tech: "Unreal Engine",
        project_work: "Pathfinding, C++ engineering",
        project_link: "https://store.steampowered.com/app/1799530/Smelogs_Playground/",
    },
    ProjectCard {
        project_name: "Chex Quest HD",
        project_image: egui::include_image!("../data/icon_cq.jpg"),
        project_description: "Remaster of the original Chex Quest",
        project_tech: "Unreal Engine",
        project_work: "A community developer prior to the project being professionally worked on",
        project_link: "https://store.steampowered.com/app/804270/Chex_Quest_HD/",
    },
];

impl crate::View for Showcase {
    fn ui(&mut self, ui: &mut Ui) {
        ui.heading("Stuff I've Worked On");

        egui::ScrollArea::vertical().show(ui, |ui| {

            // Iterate over project list and display info
            for project in PROJECTS.iter() {
                ui.separator();
                project.static_ui(ui);
            }

        });
    }
}