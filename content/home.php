<div class="container container-bigger" style="padding-top: 110px;">
    <div class="row">
        <div class="col-md-5">
            <div class="col-md-12" style="padding:45px;border: 1px solid #000;border-radius: 7px;background: #e9ecef;">
                <h6 class="incenter" style="margin-top:5px;">CLAIM FREE TRX<br>Every 10 Minutes</h6>
                <div class="incenter" style="margin:15px;"><a href="claim.php" class="button button-sm button-secondary button-nina"><span id="claim">CLAIM NOW</span></a></div>
                <h5 class="incenter">BECOME PREMIUM MEMBER TO CLAIM MORE</h5>
                <div class="incenter">
                    <p style="margin: 15px;letter-spacing: .02em;"><a class="button button-sm button-secondary button-nina" data-toggle="modal" data-target="#premium_modal"><span id="premium">BECOME PREMIUM</span></a></p>
                </div>
                <div class="incenter"><?php echo $a; ?></div>
            </div>
        </div>
        <div class="col-md-7">
            <div class="col-md-12" style="padding:35px;border: 1px solid #000;border-radius: 7px;background: #e9ecef;">
                <div>
                    <?php include('template/info.php'); ?>
                </div>
                <script src="/src/js/specs.js"></script>
                <p style="margin-top: 40px;letter-spacing: .02em;text-align: left!important;">Tron is world no.<span id="rank"></span> cryptocurrency with a market cap of <span id="cap"></span>. In last 24 hours tron coin volume remains <span id="volumetoday"></span> with tron price right now trading at <span id="price"></span>.
                    <br> You can claim free trons on this tron faucet. We give away 10,000 SUN (0.01 TRX) every 10 minutes. To claim free tron, you must follow rules and guidelines and should not do any activities that harm the good purpose fo this faucet.</p>
            
            <ul class="inline-list">
                <li class="text-center"><span><i class="fa fa-twitter circle-up" aria-hidden="true"></i></span>
                  <p class="text-spacing-sm offset-0">TWITTWR</p>
                </li>
                <li class="text-center"><span><i class="fa fa-facebook circle-up" aria-hidden="true"></i></span>
                  <p class="text-spacing-sm offset-0">FACEBOOK</p>
                </li>
                <li class="text-center"><span><i class="fa fa-discord circle-up"></i></span>
                  <p class="text-spacing-sm offset-0">DOSCORD</p>
                </li>
                <li class="text-center"><span><i class="fa fa-telegram circle-up" aria-hidden="true"></i></span>
                  <p class="text-spacing-sm offset-0">TELEGRAM</p>
                </li>
                <li class="text-center"><span><i class="fa fa-reddit circle-up" style="background-color:#ed1c94;"></i></span>
                  <p class="text-spacing-sm offset-0">REDDIT</p>
                </li>
              </ul>
            
            </div>
        </div>
    </div>
    <div class="incenter" style="margin-top:15px;"><?php echo $c; ?></div>
    <div class="modal fade" id="premium_modal" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <?php include('template/modals/premium.php'); ?>
            </div>
        </div>
    </div>

</div>
