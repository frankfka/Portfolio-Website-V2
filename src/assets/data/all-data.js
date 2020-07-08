import ProfileData from './profile-data';
import ExperienceData from './experience-data';
import ProjectsData from './projects-data';

export default {

  /*
  General profile data
   */

  profile: ProfileData,
  experience: ExperienceData,
  projects: ProjectsData,

  /*
  Website design specific data
   */

  // Buttons on intro section
  ctas: [
    {
      label: 'Contact',
      url: 'mailto:jiafrank98@gmail.com',
    }, {
      label: 'Resume',
      url: 'assets/frank-jia-resume.pdf',
    },
  ],
  // Button on projects section
  moreProjectsLink: 'https://github.com/frankfka',
  // Contact section
  contactDescription: `
    Whether you have a question about a recent blog post or just want to say hi, my inbox
    is always open. Feel free to send me an email or connect via LinkedIn. I look forward to
    hearing from you!
  `,
  contactLinks: [
    {
      label: 'Email',
      url: 'mailto:jiafrank98@gmail.com',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jiafrank/',
    },
  ],
};
