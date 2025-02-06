import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SettingComponent } from "./setting/setting.component";
import { UserManagementComponent } from "./user-management/user-management.component";

export const pagesRoute: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'user-management',
    component: UserManagementComponent
  }
]
