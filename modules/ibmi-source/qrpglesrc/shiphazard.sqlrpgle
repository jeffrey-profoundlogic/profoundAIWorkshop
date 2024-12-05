       Ctl-Opt DftActGrp(*No) ActGrp(*caller);
        //--------------------------------------------------------------------
        // Modifications
        //------------------------------------------------------------------------
        // MOD#   PGMR      DATE         DESCRIPTION
        //========================================================================*

       //----------------------------------------------------------------------
       // *entry parms
       //----------------------------------------------------------------------
       dcl-pi *n;
         custnum char(5);
         hazOut char(100);
       end-pi;

       //----------------------------------------------------------------------
       //  Mainline
       //----------------------------------------------------------------------

       if custnum = 'ALFKI' or custnum = 'AROUT' or custnum = 'SAVEA' or
          custnum = 'ANATR' or custnum = 'ANTON' or custnum = 'BERGS' or
          custnum = 'BLAUS' or custnum = 'BLNOP' or custnum = 'BOLID';
         hazOut = 'Yes, Hazardous Material can be shipped to this customer';
       else;
         hazOut = 'No, Do Not Ship Hazardous Material to this customer';
       endif;

       *INLR = *ON;
       RETURN;

