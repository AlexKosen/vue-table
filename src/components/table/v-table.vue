<script>
import vTableRow from '../v-table-row.vue';

export default {
    components: {
        vTableRow,
    },

    props: {
        users_data: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>

<template>
    <div class="v-table">
        <div class="v-table__header">
            <p>Name</p>
            <p>Points earned</p>
            <p>Points spent</p>
            <p>Registration date</p>

        </div>
        <div class="v-table__body">
            <div class="body__row">
                <v-table-row
                    v-for="row in users_data" 
                    :key="row.id"
                    :row_data = "row"
                />                
            </div>
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
}
</style>