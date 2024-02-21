// model.ts
 
export interface Data {
  menu: Menu[];
  skills: Skill[];
  contact: ContactItem[];
  work: Work[];
}

export interface Menu {
  link: string;
  icon: string;
  label: string;
}

export interface Skill {
  skill: string;
}
  
export interface ContactItem {
  icon: string;
  label: string;
  value: string;
}

export interface Work {
  company: string;
  designation: string;
  position: string;
  tenure: string;
  responsibilities: any;
}