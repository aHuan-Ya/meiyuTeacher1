import Vue from 'vue'

import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Failed from '@/views/404.vue'

import Teacher from '@/views/Teacher/index.vue'
import TeacherAdmin from '@/views/Teacher/admin.vue'

import Student from '@/views/Student/index.vue'
import StudentAdmin from '@/views/Student/admin.vue'

import Classroom from '@/views/Classroom/index.vue'
import ClassroomAdmin from '@/views/Classroom/admin.vue'

import Kaoqin from '@/views/Kaoqin/index.vue'
import KaoqinAdmin from '@/views/Kaoqin/admin.vue'

import Group from '@/views/Group/index.vue'
import GroupAdmin from '@/views/Group/admin.vue'
import GroupAdd from '@/views/Group/add.vue'

import Activity from '@/views/Activity/index.vue'
import ActivityAdmin from '@/views/Activity/admin.vue'
import ActivityAdd from '@/views/Activity/add.vue'

import Skill from '@/views/Skill/index.vue'
import SkillAdmin from '@/views/Skill/admin.vue'

import Process from '@/views/Process/index.vue'
import ProcessAdmin from '@/views/Process/admin.vue'
import processView from '@/views/Process/viewProcess.vue'

Vue.use(Router)

export default new Router({
  routes: [
    /**
     * [Home 首页]
     */
    {
      name: 'Home',
      path: '/',
      component: Home
    },

    /**
     * [Teacher 老师管理]
     */
    {
      name: 'Teacher',
      path: '/teacher/',
      component: Teacher,
      redirect: {
        path: '/teacher/admin/'
      },
      children: [
        {
          name: 'TeacherAdmin',
          path: '/teacher/admin/',
          component: TeacherAdmin
        }
      ]
    },

    /**
     * [Student 学生管理]
     */
    {
      name: 'Student',
      path: '/student/',
      component: Student,
      redirect: {
        path: '/student/admin/'
      },
      children: [
        {
          name: 'StudentAdmin',
          path: '/student/admin/',
          component: StudentAdmin
        }
      ]
    },

    /**
     * [Classroom 班级管理]
     */
    {
      name: 'Classroom',
      path: '/classroom/',
      component: Classroom,
      redirect: {
        path: '/classroom/admin/'
      },
      children: [
        {
          name: 'ClassroomAdmin',
          path: '/classroom/admin/',
          component: ClassroomAdmin
        }
      ]
    },

    /**
     * [Kaoqin 考勤管理]
     */
    {
      name: 'Kaoqin',
      path: '/kaoqin/',
      component: Kaoqin,
      redirect: {
        path: '/kaoqin/admin/'
      },
      children: [
        {
          name: 'KaoqinAdmin',
          path: '/kaoqin/admin/',
          component: KaoqinAdmin
        }
      ]
    },

    /**
     * [Group 社团小组]
     */
    {
      name: 'Group',
      path: '/group/',
      component: Group,
      redirect: {
        path: '/group/admin/'
      },
      children: [
        {
          name: 'GroupAdmin',
          path: '/group/admin/',
          component: GroupAdmin
        },
        {
          name: 'GroupAdd',
          path: '/group/add/',
          component: GroupAdd
        }
      ]
    },

    /**
     * [Activity 艺术实践]
     */
    {
      name: 'Activity',
      path: '/activity/',
      component: Activity,
      redirect: {
        path: '/activity/admin/'
      },
      children: [
        {
          name: 'ActivityAdmin',
          path: '/activity/admin/',
          component: ActivityAdmin
        },
        {
          name: 'ActivityAdd',
          path: '/activity/add/',
          component: ActivityAdd
        }
      ]
    },

    /**
     * [Skill 特长认证]
     */
    {
      name: 'Skill',
      path: '/skill/',
      component: Skill,
      redirect: {
        path: '/skill/admin/'
      },
      children: [
        {
          name: 'SkillAdmin',
          path: '/skill/admin/',
          component: SkillAdmin
        }
      ]
    },

    /**
     * [Process 过程性评价]
     */
    {
      name: 'Process',
      path: '/process/',
      component: Process,
      redirect: {
        path: '/process/admin/'
      },
      children: [
        {
          name: 'ProcessAdmin',
          path: '/process/admin/',
          component: ProcessAdmin
        },
        {
          name: 'processView',
          path: '/process/view/',
          component: processView
        }
      ]
    },

    /**
     * [Failed 404]
     */
    {
      name: 'Failed',
      path: '/404/',
      component: Failed,
      hidden: true
    },

    /**
     * [Others 其它]
     */
    {
      name: 'Others',
      path: '*',
      redirect: {
        path: '/404/'
      }
    }
  ]
})
