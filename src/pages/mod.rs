pub mod about;
pub mod showcase;

#[derive(PartialEq, Eq)]
pub enum Page {
    Showcase,
    AboutMe,
}

impl Default for Page {
    fn default() -> Self {
        Self::Showcase
    }
}
