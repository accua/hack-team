import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { TeamService } from '../team.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [TeamService]
})
export class NewMemberComponent implements OnInit {


  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  submitForm(name: string, role: string, bio: string) {
    var newPerson: Member = new Member(name, role, bio);
    console.log(newPerson)
    this.teamService.createMember(newPerson);
  }

}
