import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from './member.model';


@Injectable()
export class TeamService {
  members: FirebaseListObservable<any[]>

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  createMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string) {
    return this.angularFire.database.object('members/' + memberId)
  }

  updateMember(updatedMember) {
    var firebaseMember = this.getMemberById(updatedMember.$key);
    firebaseMember.update({name: updatedMember.name,
                          role: updatedMember.role,
                          bio: updatedMember.bio})
  }

  deleteMember(deletedMember) {
    var firebaseMember = this.getMemberById(deletedMember.$key);
    firebaseMember.remove();
  }
}
