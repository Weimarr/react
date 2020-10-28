let state = {
   profilePage: {
      posts: [
         { id: 1, name: 'Dim Dimych', message: 'Hi, how are you?', likesCount: 12, },
         { id: 2, name: 'Max Vadimych', message: 'Its my 1st post!', likesCount: 13, },
         { id: 3, name: 'Petr Petrovich', message: 'What a time to be alive?', likesCount: 1, },
      ],
     
   },
   dialogsPage: {
      messages: [
         { id: 1, message: 'Hello' },
         { id: 2, message: 'How are you?' },
         { id: 3, message: 'Have a good day!' },
         { id: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam perferendis iusto id cumque maiores at, voluptates, voluptatem officiis delectus vitae, rem sunt quibusdam velit facere eaque ullam est ipsa?" }
      ],
      dialogs: [
         { id: 1, name: 'Dimych', isActive: true, imgUrl: 'https://assets.stickpng.com/images/5845e608fb0b0755fa99d7e7.png' },
         { id: 2, name: 'Max', imgUrl: 'https://i.kym-cdn.com/photos/images/original/001/794/038/b9f.png'  },
         { id: 3, name: 'Oleg', imgUrl: 'https://lh3.googleusercontent.com/proxy/gsypaQM2t0Q1p8puyvfIW8-NOX_B88V61SK529J0Xw8cCxM9R7e65bRZZ4r9kEdDopHhcSye0nzR8yD1M1aqkyZxzKqo17tEr97rPESEgBBFu8_N-L7EmZ5G' },
         { id: 4, name: 'Serega', imgUrl: 'https://static.wikia.nocookie.net/dogelore/images/a/a9/Blue_Doge.png/revision/latest?cb=20200430225645' },
         { id: 5, name: 'Sanya', imgUrl: 'https://lh3.googleusercontent.com/proxy/RR798iBU9k7FuXsPqTH6mqhlQAuu7kOhOzButThzUpHDOnA23IyemyY7XHjGgjRd1heepXbNfwu_KqMEuX1fKY9POqGfn1l0lfmscVVaxXCe7vcsQ3R3' },
         { id: 6, name: 'Yulka', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Doge.png' }
      ]
   }
   
}

export default state;