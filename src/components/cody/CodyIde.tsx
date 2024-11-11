import { type FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection } from '..'

interface CodyIdeProps {
    isLight?: boolean
}

export const CodyIde: FunctionComponent<CodyIdeProps> = ({ isLight = true }) => {
    const allIdes = [
        { name: 'VS Code', icon: 'vs_code.svg' },
        { name: 'Visual Studio', icon: 'VisualStudio_icon.svg', isExperimental: true },
        { name: 'IntelliJ', icon: 'IntelliJ_IDEA_icon.svg' },
        { name: 'PyCharm', icon: 'PyCharm_icon.svg' },
        { name: 'GoLand', icon: 'GoLand_icon.svg' },
        { name: 'RubyMine', icon: 'RubyMine_icon.svg' },
        { name: 'WebStorm', icon: 'WebStorm_icon.svg' },
        { name: 'PhpStorm', icon: 'PhpStorm_icon.svg' },
        { name: 'Rider', icon: 'Rider_icon.svg' },
        { name: 'CLion', icon: 'CLion_icon.svg' },
        { name: 'DataGrip', icon: 'DataGrip_icon.svg' },
        { name: 'DataSpell', icon: 'DataSpell_icon.svg' },
        { name: 'Aqua', icon: 'Aqua_icon.svg' },
        { name: 'RustRover', icon: 'RustRover_icon.svg' },
    ]

    return (
        <ContentSection parentClassName="!py-0" className="mt-14">
            <div className="mb-10 text-center">
                <h3 className="mb-2 text-sm font-medium text-gray-500">IDE Support</h3>

                <h2
                    className={classNames('mb-4', {
                        'text-gray-200': !isLight,
                        'text-gray-700': isLight,
                    })}
                >
                    Cody works where you work
                </h2>
                <p className="text-gray-700 opacity-70">
                    Use Cody in the IDE that you are most familiar with. Get chat, autocomplete, and inline edit without
                    changing your workflow.
                </p>
            </div>

            <div className="mx-auto max-w-xl">
                <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-gray-200 bg-white md:grid-cols-6">
                    {allIdes.map((ide, index) => (
                        <div
                            key={ide.name}
                            className={classNames(
                                'relative flex items-center gap-x-4 border-b border-gray-200 p-4 md:justify-center md:border-r',
                                {
                                    '-mr-px': index === 1 || (index >= 2 && (index - 1) % 3 === 0),
                                    '-mb-px': index >= allIdes.length - 3,
                                    'col-span-3': index < 2,
                                    'col-span-2': index >= 2,
                                }
                            )}
                        >
                            <div className="h-8 w-8">
                                <img
                                    className="aspect-square w-full"
                                    src={`/icons/IDEs/${ide.icon}`}
                                    alt={`${ide.name} IDE Marketplace`}
                                />
                            </div>

                            <div
                                className={classNames('text-sm', {
                                    'text-gray-200': !isLight,
                                    'text-[#0F111A]': isLight,
                                    'flex-grow': index >= 2,
                                })}
                            >
                                {ide.name}
                                {ide.isExperimental && <div className="text-[9px] text-gray-400">Experimental</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ContentSection>
    )
}
