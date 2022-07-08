<template>

  <div class="background">
    <div class="box">
      <h1 style="font-size:56px; padding-top:50px">All Events</h1>
      <h1 style="font-size:17px; padding-top:20px ">with Thanks and Love</h1>
      <div class="card" v-for="item in paginatedEvents" :key="item.id">
        <img :src="`${item.image}`">
        <div class="text">
          <!-- can use momentjs to convert date format -->
          <!-- https://stackoverflow.com/questions/28949911/what-does-this-format-means-t000000-000z -->
          <h2 style="font-size:16px;">{{ item.Event_Date }}</h2>
          <h2 style="font-size:25px;">{{ item.Event_Title }}</h2>
          <p style="font-size: 18px; text-align: left; width:315px;">{{ item.Event_Summary }}</p>
          <router-link :to="`/all-event/${item.Event_Title}`">
            <button>RSVP</button>
          </router-link>
        <!-- @click="jump(item.Event_Title) -->
        </div>
      </div>
    </div>
    <div class="pagination-container">
      <el-pagination class="pagination" background :current-page="currentPage" :page-size="pageSize"
        :total="events.length" @current-change="handleCurrentChange" layout="prev, pager, next">
      </el-pagination>
    </div>

  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: "all-event",
  data() {
    return {
      // all events
      events: [],
      pageSize: 10,
      currentPage: 1,
      // event of current page
      paginatedEvents: []
    }
  },

  created() {
    axios({
      method: 'get',
      url: '/event.json'
    }).then(
      res => {
        if (res.status === 200) {
          // console.log(res)
          this.events = res.data;
          this.paginatedEvents = this.events.slice(0, this.pageSize)
        }
      }).catch(() =>
        this.$notify.error({
          title: 'Error',
          message: 'Failed to fetch event data',
          position: 'bottom-left'
        }));
  },

  methods: {
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      console.log(`当前页：${currentPage}`)
      let start = (this.currentPage - 1) * this.pageSize;
      let end = start + this.pageSize;
      console.log(start, end)
      this.paginatedEvents = this.events.slice(start, end);
    },
  },
  computed: {


  }
};

</script>

<style scoped>
.background {
  height: auto;
  background-color: white;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  margin: 50px;
  width: 804px;
  height: 570px;
  border: 1px solid;
  border-color: rgba(232, 230, 230, 1);
  box-shadow: 0px 1px 4px 0px black;
  transition: all 0.4s ease-in-out 0s;

}


.card:hover {
  transform: scale(1.1);
}

img {
  width: 50%;
  height: 100%;
  float: left;
}

.text {
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

button {
  width: 109px;
  height: 30px;
  background-color: #C84869;
  font-size: 20px;
  color: white;
  border: none;
}

.pagination {
  margin: 50px;
  transform: scale(1.2, 1.2);
  display: flex;
  justify-content: center;
}

/* 
In scoped style, parent component's style will not leak into child components.
If you want a selector affecting child components,
use ::v-deep /  >>>
*/

/* round button */
.pagination::v-deep .number {
  border-radius: 30px 30px 30px 30px !important
}

/* when hovering mouse on page number  */
.pagination::v-deep .number:hover {
  color: #606266 !important;
  background: rgba(245, 166, 189, 0.25) !important;
  border-radius: 30px 30px 30px 30px !important;
}

/* current page button */
.pagination::v-deep .number.active {
  background-color: #F5A6BD !important;
  color: #FFFFFF !important;
  box-shadow: 0.00px 1.00px 4px 0px rgba(0, 0, 0, 0.3);
  border-radius: 30px 30px 30px 30px !important;
}

/* prev next button */
.pagination ::v-deep button {
  background: transparent !important;
}

/* quicknext and quickprev */
.pagination::v-deep .more {
  background: transparent !important;
  border-radius: 30px 30px 30px 30px !important;
}

/* when hovering mouse on quicknext and quickprev */
.pagination::v-deep .more:hover {
  /* 权重选择: https://xn_0.gitee.io/2021/02/20/20210220-css-selector-weight/ */
  color: #606266 !important;
  border-radius: 30px 30px 30px 30px !important;
  background: transparent !important;
}
</style>