const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const url = "https://randomuser.me/api";
      const res = await fetch(url);
      const { results } = await res.json();
      const newPerson = results[0];

      this.firstName = newPerson.name.first;
      this.lastName = newPerson.name.last;
      this.email = newPerson.email;
      this.gender = newPerson.gender;
      this.picture = newPerson.picture.large;

      console.log(newPerson);
    },
  },
});

app.mount("#app");
