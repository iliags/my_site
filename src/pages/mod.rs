
pub mod showcase;
pub mod about;

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


