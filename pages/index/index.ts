import { Component, Vue } from "vue-property-decorator";


@Component
export default class IndexPage extends Vue {
  public items: Array<object> = [
    {
      image: "/images/android.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum cupiditate iure amet, 
        earum aut? Voluptatum pariatur delectus facere in sed id veritatis provident, officia, dolorem commodi quod ipsum sequi.`,
    },
    {
      image: "/images/android.png",
      description:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum cupiditate iure amet,
         earum aut? Voluptatum pariatur delectus facere in sed id veritatis provident, officia, dolorem commodi quod ipsum sequi.`,
    },
    {
      image: "/images/android.png",
      description:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum cupiditate iure amet,
         earum aut? Voluptatum pariatur delectus facere in sed id veritatis provident, officia, dolorem commodi quod ipsum sequi.`,
    },
    {
      image: "/images/android.png",
      description:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum cupiditate iure amet,
         earum aut? Voluptatum pariatur delectus facere in sed id veritatis provident, officia, dolorem commodi quod ipsum sequi.`,
    },
    {
      image: "/images/android.png",
      description:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum cupiditate iure amet,
         earum aut? Voluptatum pariatur delectus facere in sed id veritatis provident, officia, dolorem commodi quod ipsum sequi.`,
    },
  ];
}