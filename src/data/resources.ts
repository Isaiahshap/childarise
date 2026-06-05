export type ResourceLink = {
  title: string;
  href: string;
  description: string;
};

export type ResourceSection = {
  id: string;
  label: string;
  intro: string;
  links: ResourceLink[];
  topics?: string[];
};

export const resourceSections: ResourceSection[] = [
  {
    id: 'caregiver-support',
    label: 'Financial & Caregiver Support',
    intro:
      'Many children live with grandparents, aunts, uncles, or family friends after a parent\'s incarceration. These programs support kinship caregivers with training, advocacy, respite, and—in some cases—financial assistance.',
    links: [
      {
        title: 'Tennessee Relative Caregiver Program',
        href: 'https://www.tn.gov/dcs/program-areas/prevention/relative-caregiver.html',
        description:
          'Support groups, family advocacy, respite care, referrals, and financial assistance for relatives raising children.',
      },
      {
        title: 'Kinship Care Resources & Training (TN DCS)',
        href: 'https://www.tn.gov/dcs/program-areas/training/fpt/info/kinship-training-and-resources.html',
        description:
          'Trauma-informed training, CPR/First Aid, navigating child welfare systems, and resilience training for kinship caregivers.',
      },
      {
        title: 'Grandfamilies & Kinship Support Network (GKS)',
        href: 'https://www.gksnetwork.org/resources/relative-caregiver-supports-in-tennessee/',
        description:
          'Tennessee-specific kinship resource guides, legal resources, and caregiver support materials.',
      },
    ],
  },
  {
    id: 'child-family-wellbeing',
    label: 'Child & Family Wellbeing',
    intro:
      'Statewide directories, family support hubs, and care coordination services that help children and caregivers access mental health, education, healthcare, and stabilization support.',
    links: [
      {
        title: 'Tennessee Commission on Children and Youth (TCCY)',
        href: 'https://www.tn.gov/tccy.html',
        description:
          'Statewide youth and family resources, advocacy, publications, and service directories.',
      },
      {
        title: 'KidCentral TN',
        href: 'https://www.kidcentraltn.com/',
        description:
          'Comprehensive Tennessee resource hub covering mental health, school supports, healthcare, childcare, legal assistance, parenting, and youth programs.',
      },
      {
        title: 'Childhelp Tennessee Relative Caregiver Program',
        href: 'https://childhelp.org/childhelp-tennessee-relative-care-program/',
        description:
          'Care coordination, therapy referrals, crisis support, educational support, and family stabilization services.',
      },
    ],
  },
  {
    id: 'family-connections',
    label: 'Maintaining Family Connections',
    intro:
      'Resources aligned with Child Arise\'s mission to help families stay connected—through visits, communication, and thoughtful preparation for reunification.',
    links: [
      {
        title: 'TDOC Child Visitation Program',
        href: 'https://www.kidcentraltn.com/support/full-family-support/helping-families-stay-connected-through-the-child-visitation-program.html',
        description:
          'Extended visits between eligible incarcerated mothers and their children and grandchildren.',
      },
      {
        title: 'Casey Family Programs — Prison Visit Strategies',
        href: 'https://www.casey.org/parental-incarceration-strategy-visits/',
        description:
          'Evidence-based guidance on preparing children for prison visits and supporting healthy family contact.',
      },
    ],
    topics: [
      'Preparing children for prison visits',
      'Maintaining healthy communication',
      'Letter writing and staying in touch',
      'Reunification planning',
      'Caregiver support during incarceration',
    ],
  },
  {
    id: 'reentry-parent-support',
    label: 'Reentry & Parent Support',
    intro:
      'Supporting a parent\'s stability and reintegration often strengthens the whole family. These Tennessee programs help with employment, child support, housing referrals, and community reintegration.',
    links: [
      {
        title: 'Tennessee Child Support Re-Entry Unit',
        href: 'https://www.tn.gov/humanservices/for-families/child-support-services/re-entry-unit.html',
        description:
          'Helps incarcerated and returning parents navigate child support modifications and reentry services.',
      },
      {
        title: 'Tennessee Office of Reentry',
        href: 'https://www.tn.gov/workforce/reentrytn.html',
        description:
          'Employment, workforce development, housing referrals, and community reintegration for justice-involved individuals.',
      },
    ],
  },
  {
    id: 'mental-health-trauma',
    label: 'Mental Health & Trauma',
    intro:
      'Parental incarceration is a significant childhood trauma. Nearly 20,000 children in Tennessee are separated from a parent due to incarceration. Understanding trauma, ACEs, and resilience can help caregivers respond with care.',
    links: [
      {
        title: 'How Prison Can Impact Families (SWORPS / TPOPS)',
        href: 'https://www.sworps.tennessee.edu/wp-content/uploads/2020/09/Brochure_TPOPS_Community_2019-4-23.pdf',
        description:
          'Tennessee research on how incarceration affects children, families, and communities.',
      },
    ],
    topics: [
      'Childhood trauma and adverse childhood experiences (ACEs)',
      'Resilience building',
      'Grief and loss',
      'Talking to children about incarceration',
    ],
  },
];

export const learningCenterSections = [
  {
    title: 'For Children',
    items: [
      'Camp and enrichment opportunities',
      'Mentoring programs',
      'Counseling resources',
      'School support and advocacy',
    ],
  },
  {
    title: 'For Caregivers',
    items: [
      'Relative Caregiver Program',
      'Kinship care guides',
      'Legal and custody resources',
      'Financial assistance programs',
    ],
  },
  {
    title: 'For Parents',
    items: [
      'Reentry services',
      'Child support assistance',
      'Employment resources',
      'Family reunification planning',
    ],
  },
  {
    title: 'Learning Center Topics',
    items: [
      'What to tell a child when a parent is incarcerated',
      'How incarceration affects children at different ages',
      'Preparing for visits',
      'Supporting reunification',
      'Trauma and resilience resources',
    ],
  },
];
