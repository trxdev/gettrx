<div class="container container-bigger" style="padding-top: 110px;">
    <div class="row">
        <div class="col-md-5">
            <div class="col-md-12" style="padding:45px;border: 1px solid #000;border-radius: 7px;background: #e9ecef;">
                <h6 class="incenter">CLAIM FREE TRX NOW</h6>
                <div class="incenter" style="margin:15px;"></div>
                <h5 class="incenter">BECOME PREMIUM MEMBER TO CLAIM MORE</h5>
                <div class="incenter"><p style="margin: 15px;letter-spacing: .02em;"><a class="button button-sm button-secondary button-nina" data-toggle="modal" data-target="#premium_modal"><span id="premium">BECOME PREMIUM</span></a></p></div>
                <div class="incenter" style="margin-top:15px;"><?php echo $a; ?></div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="col-md-12" style="padding:35px;border: 1px solid #000;border-radius: 7px;background: #e9ecef;">
            <div><?php include('template/info.php'); ?></div>
                <p>You can claim 10,000 SUN (0.01 TRX) every 10 minutes. If you are looking to claim more then become a premium member and enjoy more number of claims.</p>
                <p>To claim free TRON, You need to follow TRON Faucet on Twitter and Join Discord.</p>
                <p>To claim, prove you are human as accounts with suspecious activities gets blcklisted!</p>
                <div class="incenter" <p style="margin-top: 40px;letter-spacing: .02em;text-align: left!important;"><a class="button button-sm button-secondary button-nina" data-toggle="modal" data-target="#human_verify" id="human_but"><span id="human">Prove To Be Human</span></a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="incenter" style="margin-top:15px;"><?php echo $c; ?></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.js"></script>
    <div class="modal fade" id="human_verify" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <?php include('template/modals/verification.php'); ?>
            </div>
        </div>
    </div>
    <div class="modal fade" id="premium_modal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <?php include('template/modals/premium.php'); ?>
            </div>
        </div>
    </div>

</div>
