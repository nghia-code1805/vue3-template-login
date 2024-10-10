<template>
    <layout-div>
          <div class="container">
              <h2 class="text-center mt-5 mb-3">Project Manager</h2>
              <div class="card">
                  <div class="card-header">
                      <router-link to="/create"
                          class="btn btn-outline-primary"
                          >Create New Project
                      </router-link>
                  </div>
                  <button
                    class="btn text-sm"
                    @click="projects.isGetData()">btn</button>
                  <div class="card-body">
               
                      <table class="table table-bordered">
                          <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Description</th>
                                  <th width="240px">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                            <!-- <tr v-for="project in projects.isData" :key="project.id">
                                <td>{{project.quote}}</td>
                                <td>{{project.author}}</td>
                                <td>
                                    <router-link :to="`/show/${project.id}`" class="btn btn-outline-info mx-1">Show</router-link>
                                    <router-link :to="`/edit/${project.id}`" class="btn btn-outline-success mx-1">Edit</router-link>
                                    <button 
                                        @click="handleDelete(project.id)"
                                        className="btn btn-outline-danger mx-1">
                                        Delete
                                    </button>
                                </td>
                            </tr> -->
                                   
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </layout-div>
      <div>{{ projects.isData }}</div>
      {{ projects.project }}
  </template>

<script setup lang="ts">
import projectStore from '~/stores/projectStore';

const projects = projectStore();
</script>