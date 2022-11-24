import { HiOutlineUser, HiOutlineLocationMarker, HiOutlineAcademicCap, HiOutlineCode } from 'react-icons/hi';
import { motion } from 'framer-motion';

const works = [
	{
		start: '2006',
		end: '2009',
		company: 'PT Fortuna Motor',
		position: 'Salesman',
		jobdesc: 'Memasarkan produk untuk area Kota Pontianak dan sekitarnya',
	},
	{
		start: '2009',
		end: '2011',
		company: 'PT Multi Persada Nusantara',
		position: 'Supervisor',
		jobdesc:
			'Memasarkan produk ban ke area Jakarta, Tangerang, Depok; Mengkoordinasi para salesman dan debt kolektor untuk melakukan penjualan dan penagihan;',
	},
	{
		start: '2011',
		end: 'Now',
		company: 'Frelance',
		position: 'Fullstack Web Developer',
		jobdesc:
			'Membuat berbagai aplikasi untuk client. Dengan teknologi Wordpress, CodeIgniter, Laravel, Vue, React dll.',
	},
	{
		start: '2020',
		end: '2021',
		company: 'PT ABI',
		position: 'Frontend Web Developer',
		jobdesc:
			'Membuat berbagai aplikasi menggunakan ReactJs dan NextJs. Mulai dari halaman user, admin dashboard ataupun merchant.',
	},
	{
		start: '2021',
		end: '2022',
		company: 'PT Satu Pintu',
		position: 'Fullstack Web Developer',
		jobdesc:
			'Membuat berbagai aplikasi menggunakan VueJs, ReactJs dan NextJs. Mulai dari halaman user, admin dashboard ataupun merchant.',
	},
];

export default function AboutPage() {
	return (
		<div className="flex flex-col md:flex-row gap-5">
			<div>
				<div className="p-4 rounded-xl bg-slate-700  flex flex-col items-center text-white w-full md:w-64 shadow-sm md:shrink-0">
					<div className="bg-slate-500 rounded-full w-28 aspect-square relative overflow-hidden flex items-center justify-center">
						<HiOutlineUser className="mt-10 w-32 h-32 opacity-80" />
					</div>

					<h3 className="text-center mt-3 text-sm font-semibold">Hadi Triyanto</h3>
					<div className="mt-1 text-xs text-slate-300">triwebproject@gmail.com</div>
					<div className="mt-1 text-xs text-slate-300">0895-61179-0959</div>

					<hr className="border-white/20 w-full my-3" />

					<div className="text-xs text-slate-300 space-y-4">
						<div className="flex items-start gap-2">
							<HiOutlineLocationMarker className="w-4 h-4 shrink-0 mt-0.5" />

							<div className="leading-5">
								Apartement Citypark Tower G15/12, Cengkareng Timur, Cengkareng, Jakarta Barat
							</div>
						</div>

						<div className="flex items-start gap-2">
							<HiOutlineAcademicCap className="w-4 h-4 shrink-0 mt-0.5" />

							<div className="leading-5">
								<div>- SDS Siloam VI Lingga, 2001</div>
								<div>- SMPN 1 Sui. Ambawang, 2003</div>
								<div>- SMK Immanuel Pontianak, 2006</div>
							</div>
						</div>

						<div className="flex items-start gap-2">
							<HiOutlineCode className="w-4 h-4 shrink-0" />

							<div className="leading-5 flex flex-wrap whitespace-nowrap gap-1 font-medium">
								<span className="rounded-full px-2 text-xs bg-white/60 text-brand">php</span>
								<span className="rounded-full px-2 text-xs bg-white/60 text-brand">Javascript</span>
								<span className="rounded-full px-2 text-xs bg-white/60 text-brand">MySql</span>
								<span className="rounded-full px-2 text-xs bg-white/60 text-brand">Postgres</span>
								<span className="rounded-full px-2 text-xs bg-white/60 text-brand">HTML</span>
								<span className="rounded-full px-2 text-xs bg-white/60 text-brand">CSS</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full bg-white rounded-xl border border-slate-300 p-4 md:px-6">
				<h3>Pengalaman Kerja</h3>

				<div className="my-3">
					{works.map((work, i) => (
						<motion.div
							initial={{ opacity: 0, top: -30 }}
							animate={{ opacity: 1, top: 0 }}
							key={work.start}
							className={`flex items-start gap-5 relative pt-2 ${works.length === i + 1 ? 'overflow-hidden' : 'pb-4'}`}
						>
							<div className="font-semibold w-10 shrink-0 text-xs text-center space-y-0.5 mt-0.5">
								<div>{work.start}</div> - <div>{work.end}</div>
							</div>

							<div className="w-4 h-full justify-center">
								<div className="w-1 mt-2 mx-1.5 bg-brand/50 absolute h-full"></div>
								<div className="z-10 relative w-4 h-4 aspect-square bg-brand border-white border-2 rounded-full mt-0.5"></div>
							</div>

							<div>
								<h4 className="font-bold text">{work.company}</h4>
								<div className="text-slate-600 text-xs">{work.position}</div>
								<div className="mt-1 text-slate-800">{work.jobdesc}</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
