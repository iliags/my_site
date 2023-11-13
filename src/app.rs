use std::default::Default;
use egui::{Color32, epaint, style};
use crate::pages;
use crate::pages::{Page, View};

/// Page tabs
#[derive(PartialEq, Default)]
pub struct Pages {
    page_showcase: pages::showcase::Showcase,
    page_about: pages::about::About,
    open_page: Page,
}

/// App data
#[derive(PartialEq, Default)]
pub struct TemplateApp {
    page: Pages,
}

impl TemplateApp {
    /// Called once before the first frame.
    pub fn new(cc: &eframe::CreationContext<'_>) -> Self {

        set_theme(&cc.egui_ctx, DARK);

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


#[derive(Debug, Clone, Hash, PartialEq, Eq)]
pub struct Theme {
    pub rosewater: Color32,
    pub flamingo: Color32,
    pub pink: Color32,
    pub mauve: Color32,
    pub red: Color32,
    pub maroon: Color32,
    pub peach: Color32,
    pub yellow: Color32,
    pub green: Color32,
    pub teal: Color32,
    pub sky: Color32,
    pub sapphire: Color32,
    pub blue: Color32,
    pub lavender: Color32,
    pub text: Color32,
    pub subtext1: Color32,
    pub subtext0: Color32,
    pub overlay2: Color32,
    pub overlay1: Color32,
    pub overlay0: Color32,
    pub surface2: Color32,
    pub surface1: Color32,
    pub surface0: Color32,
    pub base: Color32,
    pub mantle: Color32,
    pub crust: Color32,
}

// Colors are selected from a limited palette, setting constants for consistency
const COLOR0: Color32 = Color32::from_rgb(48,56,65);

const COLOR1: Color32 = Color32::from_rgb(58,71,80);
const COLOR1X: Color32 =  Color32::from_rgb(58*2,71*2,80*2);

const COLOR2: Color32 =  Color32::from_rgb(0,173,181);
const COLOR3: Color32 = Color32::from_rgb(238,238,238);

pub const DARK: Theme = Theme {
    /// Hyperlink
    rosewater: COLOR2,

    flamingo: Color32::from_rgb(221, 120, 120),
    pink: Color32::from_rgb(234, 118, 203),
    mauve: Color32::from_rgb(136, 57, 239),
    red: Color32::from_rgb(210, 15, 57),

    /// Error FG
    maroon: Color32::from_rgb(230, 69, 83),
    /// Warn FG
    peach: Color32::from_rgb(254, 100, 11),

    yellow: Color32::from_rgb(223, 142, 29),
    green: Color32::from_rgb(64, 160, 43),
    teal: Color32::from_rgb(23, 146, 153),
    sky: Color32::from_rgb(4, 165, 229),
    sapphire: Color32::from_rgb(32, 159, 181),

    /// Selection
    blue: Color32::from_rgb(30, 102, 123),
    lavender: Color32::from_rgb(114, 135, 253),

    /// Text
    text: COLOR3,

    subtext1: Color32::from_rgb(92, 95, 119),
    subtext0: Color32::from_rgb(108, 111, 133),
    overlay2: Color32::from_rgb(124, 127, 147),

    /// Window stroke, selection stroke
    overlay1: Color32::from_rgb(140, 143, 161),

    overlay0: Color32::from_rgb(156, 160, 176),

    /// Widget hovered
    surface2: COLOR1,
    /// Widget active
    surface1:  COLOR1X,
    /// Faint BG, widget inactive, widget open
    surface0: Color32::from_rgb(204, 208, 218),
    /// Window fill, panel fill, widget noninteractive fill
    base: COLOR0,
    /// Code BG
    mantle: Color32::from_rgb(230, 233, 239),
    /// Extreme BG
    crust: Color32::from_rgb(220, 224, 232),
};

/// Apply the given theme to a [`Context`](egui::Context).
pub fn set_theme(ctx: &egui::Context, theme: Theme) {
    let old = ctx.style().visuals.clone();
    ctx.set_visuals(egui::Visuals {
        override_text_color: Some(theme.text),
        hyperlink_color: theme.rosewater,
        faint_bg_color: theme.surface0,
        extreme_bg_color: theme.crust,
        code_bg_color: theme.mantle,
        warn_fg_color: theme.peach,
        error_fg_color: theme.maroon,
        window_fill: theme.base,
        panel_fill: theme.base,
        window_stroke: egui::Stroke {
            color: theme.overlay1,
            ..old.window_stroke
        },
        widgets: style::Widgets {
            noninteractive: make_widget_visual(old.widgets.noninteractive, &theme, theme.base),
            inactive: make_widget_visual(old.widgets.inactive, &theme, theme.surface0),
            hovered: make_widget_visual(old.widgets.hovered, &theme, theme.surface2),
            active: make_widget_visual(old.widgets.active, &theme, theme.surface1),
            open: make_widget_visual(old.widgets.open, &theme, theme.surface0),
        },
        selection: style::Selection {
            bg_fill: theme
                .blue
                //.linear_multiply(if theme == LATTE { 0.4 } else { 0.2 }),
                .linear_multiply(0.2),
            stroke: egui::Stroke {
                color: theme.overlay1,
                ..old.selection.stroke
            },
        },
        window_shadow: epaint::Shadow {
            color: theme.base,
            ..old.window_shadow
        },
        popup_shadow: epaint::Shadow {
            color: theme.base,
            ..old.popup_shadow
        },
        ..old
    });
}

fn make_widget_visual(
    old: style::WidgetVisuals,
    theme: &Theme,
    bg_fill: Color32,
) -> style::WidgetVisuals {
    style::WidgetVisuals {
        bg_fill,
        weak_bg_fill: bg_fill,
        bg_stroke: egui::Stroke {
            color: theme.overlay1,
            ..old.bg_stroke
        },
        fg_stroke: egui::Stroke {
            color: theme.text,
            ..old.fg_stroke
        },
        ..old
    }
}