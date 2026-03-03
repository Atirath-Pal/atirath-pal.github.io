import IITMandiInternship from './pages/IIT_Mandi_Internship';
import ImageEditorProject from './pages/Image_Editor_Project_Page';
import OnlineCodeProject from './pages/Online_Code_Project_Page';
import TestFakeInternship from './pages/Test_Fake_Internship';

const portfolioRegistry = [
  {
    id: 'iit-mandi-internship',
    title: 'Internship at IIT Mandi – AI & Research Experience',
    urlDisplay: 'portfolio.com › internships › iit-mandi',
    snippet:
      'Summer research internship at IIT Mandi focused on applied machine learning, experimentation, and academic collaboration in a highly interdisciplinary environment.',
    category: 'Internship',
    path: '/internships/iit-mandi',
    component: IITMandiInternship,
  },
  {
    id: 'image-editor-2',
    title: 'Image Editor 2 – Privacy-First Browser Photo Editor',
    urlDisplay: 'portfolio.com › projects › image-editor-2',
    snippet:
      'High-performance in-browser photo editor using the Canvas API with real-time filters, non-destructive edits, and a mobile-first UX.',
    category: 'Project',
    path: '/projects/image-editor-2',
    component: ImageEditorProject,
  },
  {
    id: 'online-code-project',
    title: 'Algo Mentor – Interactive Algorithm Practice Platform',
    urlDisplay: 'portfolio.com › projects › algo-mentor',
    snippet:
      'An online platform designed to help students practice algorithms with guided explanations, visualizations, and progressively challenging problems.',
    category: 'Project',
    path: '/projects/algo-mentor',
    component: OnlineCodeProject,
  },
  {
    id: 'test-fake-internship',
    title: 'Exploratory Internship – Prototype Experience Page',
    urlDisplay: 'portfolio.com › internships › exploratory',
    snippet:
      'A prototype internship page used to experiment with layout, storytelling, and interaction patterns before final production designs.',
    category: 'Internship',
    path: '/internships/test-fake',
    component: TestFakeInternship,
  },
];

export default portfolioRegistry;

