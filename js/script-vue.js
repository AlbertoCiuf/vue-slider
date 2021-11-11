const app = new Vue({

  el: '#app',
  
  mounted(){
    setInterval(this.nextSlide, 3000)
  },

  data: {
    images : [
      'img/01.jpg',
      'img/02.jpg',
      'img/03.jpg',
      'img/04.jpg',
      'img/05.jpg'
    ],
    title : [
      'Svezia',
      'Svizzera',
      'Gran Bretagna',
      'Germania',
      'Paradise'
    ],
    text: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      'Lorem ipsum',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
      'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
    ],
    contatore: 0,
  },

  methods: {
    
    nextSlide(){
      this.contatore++;
      if (this.contatore > this.images.length - 1) {
        this.contatore = 0;
      } 
    },

    prevSlide(){
      this.contatore--;
      if (this.contatore < 0) {
        this.contatore = this.images.length - 1;
      }
    }
  }
});