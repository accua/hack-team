import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { TeamService } from '../team.service'

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [TeamService]
})

export class MemberDetailComponent implements OnInit {
  memberId: string;
  memberToDisplay;

  constructor(private location: Location, private route: ActivatedRoute, private teamService: TeamService) {
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = (urlParameters['id']);
    });
    this.memberToDisplay = this.teamService.getMemberById(this.memberId)
  }
}
