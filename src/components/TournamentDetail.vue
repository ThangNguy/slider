<template>
    <div class="container">
        <div class="panel-main-data">
            <div  class="data-tournament" v-for="(tournament, index) in tournaments" :key="index" v-show="isFilterID(tournament.ID)">
                <h4><strong>{{ tournament.name }}</strong></h4>
                <p><strong>Date: </strong>{{ formatTournamentTime(tournament.startDate, tournament.endDate) }}</p>
                <p><strong>Location: </strong>{{ tournament.city }} | {{ tournament.state }} </p>
                <button>DETAILS</button><button>WHO'S COMING</button><button>MORE INFO</button>
                <div class="row">
                <div class="col-sm-8">
                    <Carousel :navigationEnabled="true" :perPage="1">
                        <slide v-for="(slide, index) in slides" :key="index">
                            <img style="max-width: 100%" :src="slide.image">
                        </slide>
                    </Carousel>
                </div>
                <div class="col-sm-4">
                   
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import moment from 'moment'
import { Carousel, Slide } from 'vue-carousel'

export default {
    name: "TournamentDetail",
    components: {
        Carousel,
        Slide
    },
    data () {
    let slides = [
        {title: 'Title 1', image: require('../assets/slider/slide1.jpg')},
        {title: 'Title 2', image: require('../assets/slider/slide2.jpg')},
        {title: 'Title 3', image: require('../assets/slider/slide3.jpg')},
        {title: 'Title 4', image: require('../assets/slider/slide4.jpg')}
    ]
    return {
        slides: slides
        }
    },
    computed: {
        tournaments() {
            return this.$store.state.tournaments
        }
    },
    methods: {
        isFilterID(tournament){
            if (this.$route.params.tournamentID.toString() === tournament.toString()) {
                return true
            } else {
                return false
            }             
        },
        formatTournamentTime(startDate, endDate) {
            return moment(startDate).format('MMMM, D') + ' - ' + moment(endDate).format('D, YYYY');
        }
    },
    created() {
        this.$store.dispatch('getTournaments')
    }
}
</script>

<style lang="scss" scoped>

    .container {
        background-color: #ffffff;
        padding-top: 50px;
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 0px;
    }
    .data-tournament {
        text-align: left;
    }
    .panel-main-data {
        box-shadow: 0 0 5px 2px #c7c7c7;
        position: relative;
        padding: 15px 20px;
    }
    button {
        margin-right: 30px;
        color: orangered;
        border-width: 0;
    }
    button:hover {
        background: orangered;
        color: #fff
    }

</style>