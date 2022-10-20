<script lang="ts">
	import Headline from "$lib/headline.svelte"
</script>

<svelte:head>
	<title>Legal – alexander.trefz.me</title>
	<meta name="description" content="Boring legal details." />
</svelte:head>

<div class="legal">
	<Headline>Legal Disclaimers</Headline>

	<article>
		<section>
			<h2>Impressum (Germany)</h2>

			<p>Angaben gemäß § 5 TMG.</p>
		</section>

		<section>
			<h2>Kontakt</h2>

			<p>E-Mail: alexander . trefz (a) gmail . com</p>
		</section>

		<section>
			<h2>Verantwortlich für den Inhalt</h2>

			<p class="responsibleForContent">
				Nach § 55 Abs. 2 RStV: <br />
				Alexander Trefz <br />
				Türkenstraße 5 <br />
				13349 Berlin
			</p>
		</section>

		<section>
			<h2>Haftung für Inhalte</h2>

			<p>
				Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
				Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
				jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
				Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
				Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
				Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
				gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
				forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
				Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
				Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
				Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
				Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
				entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
				entfernen.
			</p>
		</section>

		<section>
			<h2>Haftung für Links</h2>

			<p>
				Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
				Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
				Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
				Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
				verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
				Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
				waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
				inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
				Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
				von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
			</p>
		</section>

		<section>
			<h2>Urheberrecht</h2>

			<p>
				Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
				Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
				Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
				Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
				jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
				sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
				Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
				werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
				Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
				Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
				entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
				wir derartige Inhalte umgehend entfernen.
			</p>
		</section>

		<section>
			<h2>Datenschutz</h2>

			<p>
				Die Nutzung unserer Webseite ist in der Regel ohne Angabe
				personenbezogener Daten möglich. Soweit auf unseren Seiten
				personenbezogene Daten (beispielsweise Name, Anschrift oder
				eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
				freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
				Zustimmung nicht an Dritte weitergegeben.
			</p>

			<p>
				Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
				der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
				lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
				möglich.
			</p>

			<p>
				Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
				Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
				angeforderter Werbung und Informationsmaterialien wird hiermit
				ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
				ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
				Werbeinformationen, etwa durch Spam-Mails, vor.
			</p>
		</section>
	</article>
</div>

<style lang="scss">
	.legal {
		display: grid;
		gap: 30px;
	}

	article {
		display: grid;
		gap: 40px;
		justify-items: center;
	}

	section {
		display: grid;
		gap: 10px;
		justify-items: center;
	}

	h2 {
		font-family: var(--font-article-title);
		font-size: calc(var(--base-font-size) * 1.25);
	}

	p {
		font-variant-numeric: lining-nums;
		font-family: var(--font-article-text);
		max-width: var(--content-width);
		font-size: calc(var(--base-font-size) * 0.875);
		line-height: 1.3;
		text-align: var(--alignment);

		&.responsibleForContent {
			text-align: center;
		}
	}
</style>
