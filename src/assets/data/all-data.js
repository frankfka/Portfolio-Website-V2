import ProfileData from './profile-data';
import ExperienceData from './experience-data';
import ProjectsData from './projects-data';

export default {
  // Invariant Data

  profile: ProfileData,
  experience: ExperienceData,
  projects: ProjectsData,

  // Website specific properties

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
  moreProjectsLink: '',
  // Contact section
  contactDescription: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.
  `,
  contactLinks: [
    {
      label: 'Email',
      url: 'asd',
    },
    {
      label: 'LinkedIn',
      url: 'saf',
    },
  ],
};
