export interface PersonalContact {
  title: string;
  file: string;
  description: string;
  link: string;
}

export const PersonalContactData: PersonalContact[] = [
  {
    title: "WhatsApp",
    file: "whatsapp.png",
    description: "+55 (44) 98844-7123",
    link: "https://api.whatsapp.com/send?phone=5544988447123&text=I%20want%20to%20talk%20with%20you%20about...",
  },
  {
    title: "Gmail",
    file: "gmail.png",
    description: "josebrunocampanholi@gmail.com",
    link: "mailto:josebrunocampanholi@gmail.com?subject=I want to talk with you about...",
  },
];
