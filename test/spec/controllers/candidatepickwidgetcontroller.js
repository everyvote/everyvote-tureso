'use strict';

describe('Controller: CandidatepickwidgetcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('everyvoteTuresoApp'));

  var CandidatepickwidgetcontrollerCtrl,
    scope,
    CandidatePicksService,
    initialize,
    returnAndResolvePromiseWith;



  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _CandidatePicksService_, $q) {

    returnAndResolvePromiseWith = function (val) {
      var d = $q.defer();
      d.resolve(val);
      return d.promise;
    };

    CandidatePicksService = _CandidatePicksService_;

    spyOn(CandidatePicksService, 'savePick')
      .and.returnValue(returnAndResolvePromiseWith());

    initialize = function () {

      scope = $rootScope.$new();
      scope.candidateId = 'fake-candidate';

      CandidatepickwidgetcontrollerCtrl = $controller('CandidatePickWidgetController', {
        $scope: scope,
        CandidatePicksService: CandidatePicksService
      });

    };

  }));

  describe('initial state', function () {

    describe('always', function () {

      beforeEach(function () {
        spyOn(CandidatePicksService, 'getPick')
          .and.returnValue(returnAndResolvePromiseWith());

        initialize();

        scope.$digest();
      });

      it('should call getPick on the candidatepicksservice', function () {
          expect(CandidatePicksService.getPick).toHaveBeenCalledWith(scope.candidateId);
      });

      it('should have a setVotingForFunction', function () {
        expect(scope.setVotingFor).toBeDefined();
      });

      it('should have a setNotVotingForFunction', function () {
        expect(scope.setNotVotingFor).toBeDefined();
      });

    });

    describe('given that the candidate pick is V', function () {
      beforeEach(function () {

        spyOn(CandidatePicksService, 'getPick')
          .and.returnValue(returnAndResolvePromiseWith('V'));

        initialize();

        scope.$digest();

      });

      it('should set flags accordingly', function () {
        expect(scope.notVotingForFlag).toBe(false);
        expect(scope.votingForFlag).toBe(true);
      });
    });

    describe('given that the candidate pick is U', function () {
      beforeEach(function () {

        spyOn(CandidatePicksService, 'getPick')
          .and.returnValue(returnAndResolvePromiseWith('U'));

        initialize();

        scope.$digest();

      });

      it('should set flags accordingly', function () {
        expect(scope.notVotingForFlag).toBe(false);
        expect(scope.votingForFlag).toBe(false);
      });

    });

    describe('given that the candidate pick is N', function () {
      beforeEach(function () {

        spyOn(CandidatePicksService, 'getPick')
          .and.returnValue(returnAndResolvePromiseWith('N'));

        initialize();

        scope.$digest();

      });

      it('should set flags accordingly', function () {
        expect(scope.notVotingForFlag).toBe(true);
        expect(scope.votingForFlag).toBe(false);
      });

    });

  });

  describe('when setVotingFor is invoked', function () {

    beforeEach(function () {
        initialize();
    });

    describe('given that votingForFlag is true', function () {

      beforeEach(function () {

        scope.votingForFlag = true;
        scope.notVotingForFlag = false;

        scope.setVotingFor();

        scope.$digest();

      });

      it('should call savePick on the candidate pick service', function () {
        expect(CandidatePicksService.savePick)
          .toHaveBeenCalledWith('fake-candidate', 'U');
      });

      it('should set votingForFlag', function () {
        expect(scope.votingForFlag).toEqual(false);
      });

    });

    // describe('given that votingForFlag is falsy', function () {
    //   beforeEach(function () {

    //     scope.votingForFlag = false;

    //     scope.setVotingFor();

    //     scope.$digest();

    //   });

    //   it('should call savePick on the candidate pick service', function () {
    //     expect(CandidatePicksService.savePick)
    //       .toHaveBeenCalledWith('fake-candidate', 'V');
    //   });

    //   it('should set votingForFlag', function () {
    //     expect(scope.votingForFlag).toEqual(true);
    //   });

    //   it('should unset notVotingForFlag', function () {
    //     expect(scope.notVotingForFlag).toEqual(false);
    //   });

    // });


  });

  describe('when setNotVotingFor is invoked', function () {

    beforeEach(function () {
      initialize();
    });

    describe('given that notVotingForFlag is true', function () {

      beforeEach(function () {

        scope.notVotingForFlag = true;
        scope.votingForFlag = false;

        scope.setNotVotingFor();

        scope.$digest();

      });

      it('should call savePick on the candidate pick service', function () {
        expect(CandidatePicksService.savePick)
          .toHaveBeenCalledWith('fake-candidate', 'U');
      });

      it('should set notVotingForFlag', function () {
        expect(scope.notVotingForFlag).toEqual(false);
      });

    });

    // describe('given that notVotingForFlag is falsy', function () {

    //   beforeEach(function () {

    //     scope.notVotingForFlag = false;
    //     scope.votingForFlag = true;

    //     scope.setNotVotingFor();

    //     scope.$digest();

    //   });

    //   it('should call savePick on the candidate pick service', function () {
    //     expect(CandidatePicksService.savePick)
    //       .toHaveBeenCalledWith('fake-candidate', 'N');
    //   });

    //   it('should set notVotingForFlag', function () {
    //     expect(scope.notVotingForFlag).toEqual(true);
    //   });

    //   it('should unset votingForFlag', function () {
    //     expect(scope.votingForFlag).toEqual(false);
    //   });

    // });


  });
});
