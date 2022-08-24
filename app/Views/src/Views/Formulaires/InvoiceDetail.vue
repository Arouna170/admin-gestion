<template>
<div class="page-content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0 font-size-18">Facture</h4>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="clearfix">
                            <div class="float-left">
                                <img src="image/tls-logo.png" alt="" height="65">
                            </div>
                            <div class="float-right">
                                <h4 class="m-0 d-print-none">Facture</h4>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-6">
                                <h6 class="font-weight-bold">A:</h6>
                                <address class="line-h-24">
                                    <b>Client1</b><br>
                                    Lome-Tokoin<br>
                                    TOGO<br>
                                    <abbr title="Phone">Tel:</abbr> 620-802-9649
                                </address>
                            </div><!-- end col -->
                            <div class="col-6">
                                <div class="mt-3 float-right">
                                    <p class="mb-2"><strong>Date: </strong> Jan 17, 2016</p>
                                    <p class="mb-2"><strong>Status: </strong> <span class="badge badge-soft-success">Payé</span></p>
                                    <p class="m-b-10"><strong>Numéro ordre:</strong> #123456</p>
                                </div>
                            </div><!-- end col -->
                        </div>
                        <!-- end row -->

                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table mt-4">
                                        <thead>
                                            <tr>
                                                <th>N°</th>
                                                <th>Désignation</th>
                                                <th>Quantité</th>
                                                <th>Prix Unitaire</th>
                                                <th class="text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <b>HP 21.5 inch Full HD LED Backlit IPS Panel Monitor (22es)</b>
                                                    <br />
                                                    Brand Model VGN-TXN27N/B
                                                    11.1" Notebook PC
                                                </td>
                                                <td>1</td>
                                                <td>$1799</td>
                                                <td class="text-right">$1799</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <b>Lenovo Ideapad L340 Core i5 9th Gen</b> <br />
                                                    Two Year Extended Warranty -
                                                    Parts and Labor
                                                </td>
                                                <td>3</td>
                                                <td>$499</td>
                                                <td class="text-right">$1497</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>
                                                    <b>LG 260 L Frost Free Double Door 4 Star</b> <br />
                                                    Shiny Steel Refrigerator, GL-I292RPZL
                                                </td>
                                                <td>2</td>
                                                <td>$412</td>
                                                <td class="text-right">$824</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="clearfix pt-5">
                                    <h6 class="text-muted">Notes:</h6>
                                    <small>
                                        Tous les comptes doivent être payés dans les 7 jours suivant la réception de la facture. À payer par chèque ou carte de crédit ou paiement direct en ligne. Si le compte n’est pas payé dans les 7 jours, les détails des crédits fournis comme confirmation des travaux entrepris seront facturés les frais indiqués ci-dessus.
                                    </small>
                                </div>

                            </div>
                            <div class="col-6">
                                <div class="float-right">
                                    <p><b>Montant:</b> $4120.00</p>
                                    <p><b>TVA (1,10%)</b> $515</p>
                                    <h3>$4635.00 USD</h3>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="hidden-print mt-4 mb-4">
                            <div class="text-right">
                                <a href="javascript:window.print()" class="btn btn-primary waves-effect waves-light">Imprimer</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
