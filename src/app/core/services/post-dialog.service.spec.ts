import { TestBed, inject } from '@angular/core/testing';

import { PostDialogService } from './post-dialog.service';

describe('PostDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDialogService]
    });
  });

  it('should be created', inject([PostDialogService], (service: PostDialogService) => {
    expect(service).toBeTruthy();
  }));
});
