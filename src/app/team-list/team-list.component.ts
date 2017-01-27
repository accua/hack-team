import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { TeamService } from '../team.service';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})
export class TeamListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByRole: string = 'allHackers'

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.members = this.teamService.getMembers();
  }

  goToDetail(selectedMember) {
    this.router.navigate(['members', selectedMember.$key])
  }

  onChange(option) {
    this.filterByRole = option;
  }

}
