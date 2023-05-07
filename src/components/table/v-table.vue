<script>
import vTableRow from '../v-table-row.vue';

export default {
    components: {
        vTableRow,

    },

    data() {
        return {
            usersPerPage: 10, 
            pageNumber: 1,           
        }
    },

    computed: {
        pages () {
            return Math.ceil(this.users_data.length / this.usersPerPage)
        },
        paginationUsers() {
            let from = (this.pageNumber - 1) * this.usersPerPage
            let to = from + this.usersPerPage
            return this.users_data.slice(from, to)
        },
    },

    props: {
        users_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    methods: {
        pageClick(page) {
            this.pageNumber = page
        },
        sortByName() {
            this.users_data.sort((a, b) => a.name.localeCompare(b.name))
        },
        sortByPointsEarned() {
            this.users_data.sort((a, b) => a.points_earned - b.points_earned)
        },
        sortByPointsSpend() {
            this.users_data.sort((a, b) => a.points_spent - b.points_spent)
        },
        sortByDate() {
            this.users_data.sort((a, b) => a.registration_date.localeCompare(b.registration_date))
        }
    }
}
</script>

<template>
    <div class="v-table">
        <div class="v-table__header">
            <p @click="sortByName">Name<i class="material-icons">unfold_more</i></p>
            <p @click="sortByPointsEarned">Points earned<i class="material-icons">unfold_more</i></p>
            <p @click="sortByPointsSpend">Points spent<i class="material-icons">unfold_more</i></p>
            <p @click="sortByDate">Registration date<i class="material-icons">unfold_more</i></p>

        </div>
        <div class="v-table__body">
            <div class="body__row">
                <v-table-row
                    v-for="row in paginationUsers" 
                    :key="row.id"
                    :row_data = "row"
                />                
            </div>
        </div>
        <div class="v-table__pagination">
            <div class="page"
                v-for="page in pages"
                :key="page"
                :class="{'page__selected': page === pageNumber}"
                @click="pageClick(page)"
            >{{ page }}</div>
        </div>
    </div>
  
</template>

<style>
.v-table {
    max-width: 900px;
    margin: 0 auto;
}
.v-table__header {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px #e7e7e7;
}
.v-table__header:hover{
    cursor: pointer;
}
.v-table__header p {
    display: flex;
    align-items: center;
    flex-basis: 25%;
    text-align: left;
}
.v-table__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}
.page {
    padding: 8px;
    margin-right: 10px;
    border: solid 1px #e7e7e7
}
.page:hover {
    cursor: pointer;
    background-color: #aeaeae;
    color: #fff;
}
.page__selected {
    cursor: pointer;
    background-color: #aeaeae;
    color: #fff;
}
</style>