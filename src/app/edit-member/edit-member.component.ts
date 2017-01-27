import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { TeamService } from '../team.service';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [TeamService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {

  }

}
