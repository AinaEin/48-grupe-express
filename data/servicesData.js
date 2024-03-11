const servicesData = [
  {
    id: "design",
    title: "Design",
    titleTeam: "Design Team",
    href: "/services/design",
    hrefTeam: "/services/design/design-team",
    promoText:
      "Elevate your brand with cutting-edge design solutions that blend creativity and functionality seamlessly. Our team of experienced designers is dedicated to crafting visually stunning and user-centric designs that captivate your audience and leave a lasting impression.",
  },
  {
    id: "web-development",
    title: "Web development",
    titleTeam: "Web development Team",
    href: "/services/web-development",
    hrefTeam: "/services/:serviceId/web-development-team",
    promoText:
      "Transform your online presence with our web development prowess. Whether you need a sleek and responsive website, a robust e-commerce platform, or a custom web application, our skilled developers are committed to bringing your digital vision to life, delivering high-performance solutions that drive results.",
  },
  {
    id: "ux",
    title: "UX",
    titleTeam: "UX Team",
    href: "/services/ux",
    hrefTeam: "/services/:serviceId/ux-team",
    promoText:
      "Revolutionize user experiences with our UX expertise that goes beyond aesthetics. From intuitive navigation to engaging interactions, we specialize in creating digital experiences that not only meet but exceed user expectations, ensuring a seamless and enjoyable journey for your audience.",
  },
];

export { servicesData };
