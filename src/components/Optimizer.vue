<template>
  <div class="col-2">
    <md-card md-with-hover class="card">
      <md-card-header class="card-heading">
        <div class="md-title" style="flex: 1">
          Current Lineup
          <span>(0/1)</span>
        </div>
        <md-button class="md-raised md-primary">
          <md-icon>sports_baseball</md-icon>Optimize
        </md-button>
      </md-card-header>

      <md-list class="md-triple-line">
        <md-divider class="md-inset"></md-divider>
        <!-- Starting Pitcher -->
        <md-list-item>
          <div>SP</div>

          <div class="md-list-item-text">
            <span></span>
          </div>

          <md-button @click="vacant = !vacant" class="md-icon-button md-list-action">
            <md-icon class="md-primary">{{ vacant ? 'add' : 'indeterminate_check_box' }}</md-icon>
          </md-button>
        </md-list-item>

        <md-divider class="md-inset"></md-divider>
        <md-list-item>
          <div>C</div>

          <div class="md-list-item-text">
            <span></span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">indeterminate_check_box</md-icon>
          </md-button>
        </md-list-item>

        <md-divider class="md-inset"></md-divider>
        <md-list-item>
          <div>1B</div>

          <div class="md-list-item-text">
            <span></span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">indeterminate_check_box</md-icon>
          </md-button>
        </md-list-item>

        <md-divider class="md-inset"></md-divider>
        <md-list-item>
          <div>2B</div>

          <div class="md-list-item-text">
            <span></span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">indeterminate_check_box</md-icon>
          </md-button>
        </md-list-item>

        <md-divider class="md-inset"></md-divider>
        <md-list-item>
          <div>3B</div>

          <div class="md-list-item-text">
            <span></span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">indeterminate_check_box</md-icon>
          </md-button>
        </md-list-item>

        <md-divider class="md-inset"></md-divider>
        <md-list-item>
          <div>SS</div>

          <div class="md-list-item-text">
            <span></span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">indeterminate_check_box</md-icon>
          </md-button>
        </md-list-item>

        <md-divider class="md-inset"></md-divider>
        <md-list-item>
          <div>OF</div>

          <div class="md-list-item-text">
            <span></span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">indeterminate_check_box</md-icon>
          </md-button>
        </md-list-item>

        <md-divider class="md-inset"></md-divider>
        <md-list-item>
          <div>OF</div>

          <div class="md-list-item-text">
            <span></span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">indeterminate_check_box</md-icon>
          </md-button>
        </md-list-item>

        <md-divider class="md-inset"></md-divider>
        <md-list-item>
          <div>OF</div>

          <div class="md-list-item-text">
            <span></span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">indeterminate_check_box</md-icon>
          </md-button>
        </md-list-item>

        <md-divider class="md-inset"></md-divider>
      </md-list>

      <md-card-actions>
        <md-button class="md-raised md-accent">Clear</md-button>
        <md-button class="md-raised md-primary">
          <md-icon>sports_baseball</md-icon>Optimize
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import methods from "../../methods";

export default {
  name: "optimizer",
  data() {
    return {
      stats: {},
      vacant: true
    };
  },
  methods: {
    ...methods
  }
};
</script>

<style>
.opti-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
.col-1 {
  max-width: 20rem;
}
.list {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
.card-heading {
  display: flex;
  justify-content: space-between;
}
.col-2 {
  max-width: 32rem;
  min-width: 20rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
}
.md-list-item-text {
  padding-left: 4rem;
}
.md-list.md-triple-line .md-list-item-content {
  min-height: initial;
}
</style>
