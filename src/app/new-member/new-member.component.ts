import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { TeamService } from '../team.service'

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: []
})
export class NewMemberComponent implements OnInit {


  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  addTeamMember(name: string, role: string, bio: string) {
    var newMember: Member = new Member(name, role, bio)
  }

}
