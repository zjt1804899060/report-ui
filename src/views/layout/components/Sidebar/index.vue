<template>
  <el-scrollbar :class="{ 'is-collapse': isCollapse }" class="side-bar-container">
    <div class="admin-title" @click="goBigScreen">
      <div class="con">
        <img :src="logoUrl" width="50" />
        <span class="name">数据中台</span>
      </div>
    </div>
    <el-menu
      :active-text-color="variables['menu-color-active']"
      :background-color="variables['menu-background']"
      :default-active="activeMenu"
      :collapse="isCollapse"
      :collapse-transition="false"
      :text-color="variables['menu-color']"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import variables from "@/assets/styles/variables.scss";
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";

export default {
  data() {
    return {
      logoUrl: process.env.STATIC_URL + 'logo-dp.png'
    }
  },
  components: { SidebarItem },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    variables() {
      return variables;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
  methods: {
    goBigScreen() {
      let routeUrl = this.$router.resolve({
        path: "/report/bigScreen",
      });
      window.open(routeUrl.href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-title {
  width: 100%;
  font-weight: 500;
  color: #ffffff;
  font-size: 14px;
  .con {
    margin: 8px auto 0;
    display: flex;
    align-items: center;
    padding-left: 28px;
    .name {
      color: #fff;
      font-size: 18px;
      width: 200px;
      line-height: 1.23;
      margin-left: 8px;
    }
  }
}
.admin-title:hover {
  cursor: pointer;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
@mixin active {
  &:hover {
    color: $base-color-white;
    background-color: $base-menu-background-active !important;
    font-weight: normal;
    i {
      color: $base-color-white;
    }
  }

  &.is-active {
    color: $base-color-white;
    background-color: $base-menu-background-active !important;
    font-weight: normal;
    i {
      color: $base-color-white;
    }
  }
}

.side-bar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: $base-z-index;
  width: $base-left-menu-width;
  height: 100vh;
  overflow: hidden;
  background: $base-menu-background;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: width $base-transition-time;

  &.is-collapse {
    width: $base-left-menu-width-min;
    border-right: 0;
    .admin-title {
      .con {
        padding-left: 0;
        img {
          
        }
      }
    }

    ::v-deep {
      .el-menu {
        transition: width $base-transition-time;
      }

      .el-menu--collapse {
        border-right: 0;

        .el-submenu__icon-arrow {
          right: 10px;
          margin-top: -3px;
        }

        .el-menu-item,
        .el-submenu {
          text-align: center;
        }
      }
    }
  }

  ::v-deep {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    .el-menu {
      padding: 4px 8px;
      border: 0;

      .vab-fas-icon {
        padding-right: 3px;
        font-size: $base-font-size-default;
        display: inline-block;
        width: 14px;
      }

      .vab-remix-icon {
        padding-right: 3px;
        font-size: $base-font-size-default + 2;
      }
    }

    .el-menu-item,
    .el-submenu__title {
      height: 40px;
      line-height: 40px;
      vertical-align: middle;
    }

    .el-menu-item {
      @include active;
    }
  }
}
</style>
