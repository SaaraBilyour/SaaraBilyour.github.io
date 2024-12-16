<template>
  <div class="container mt-4">
    <div class="row justify-content-center pt-4">
      <!-- Loop through items -->
      <div class="col-12 col-md-6 mb-4" v-for="item in sortedItems" :key="item.id">
        <div class="card shadow-sm d-flex flex-row align-items-center p-2">
          <!-- Dynamic Image Path -->
          <img
            :src="getImagePath(item.image)"
            :alt="item.name"
            class="card-img-small mx-auto"
            width="100"
            height="100"
          />
          <div class="card-body">
            <h5 class="card-title text-success fw-bold">{{ item.name }}</h5>
            <p class="card-text mb-1"><strong>Profession:</strong> {{ item.profession }}</p>
            <p class="card-text"><strong>Location:</strong> {{ item.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Alice Johnson',
          profession: 'Software Engineer',
          location: 'Toronto, ON',
          image: 'images/gee_me_001.png',
        },
        {
          id: 2,
          name: 'Brian Smith',
          profession: 'Data Scientist',
          location: 'Vancouver, BC',
          image: 'images/gee_me_002.png',
        },
        {
          id: 3,
          name: 'Catherine Brown',
          profession: 'UX Designer',
          location: 'Calgary, AB',
          image: 'images/gee_me_003.png',
        },
        {
          id: 4,
          name: 'Daniel White',
          profession: 'Product Manager',
          location: 'Montreal, QC',
          image: 'images/gee_me_004.png',
        },
        {
          id: 5,
          name: 'Elena Green',
          profession: 'Marketing Specialist',
          location: 'Halifax, NS',
          image: 'images/gee_me_005.png',
        },
        {
          id: 6,
          name: 'Frank Turner',
          profession: 'DevOps Engineer',
          location: 'Ottawa, ON',
          image: 'images/gee_me_006.png',
        },
        {
          id: 7,
          name: 'Grace Lewis',
          profession: 'Data Analyst',
          location: 'Winnipeg, MB',
          image: 'images/gee_me_007.png',
        },
        {
          id: 8,
          name: 'Henry Walker',
          profession: 'Full-Stack Developer',
          location: 'Edmonton, AB',
          image: 'images/gee_me_008.png',
        },
        {
          id: 9,
          name: 'Isabella Clark',
          profession: 'Graphic Designer',
          location: 'Quebec City, QC',
          image: 'images/gee_me_009.png',
        },
        {
          id: 10,
          name: 'Jack Evans',
          profession: 'Cybersecurity Specialist',
          location: 'Victoria, BC',
          image: 'images/gee_me_010.png',
        },
      ],
    }
  },
  computed: {
    sortedItems() {
      return this.items.sort((a, b) => a.name.localeCompare(b.name))
    },
  },
  methods: {
    getImagePath(image) {
      return `${import.meta.env.BASE_URL}${image}` // compatibility with GitHub
    },
  },
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
}

.card img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #f8f9fa;
}

h1 {
  font-size: 2rem;
  color: #42b883;
}
</style>
